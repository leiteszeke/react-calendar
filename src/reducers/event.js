// Dependencies
import { normalize, denormalize } from 'normalizr';
// Schemas
import { eventsSchema } from '../schemas/event';
// Actions
import {
    CLEAR_VALUES,
    FETCH_EVENTS,
    CREATE_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
} from '../actions';

const intialState = {
    eventDeleted: false,
    eventSaved: false,
    eventUpdated: false,
};

export const eventReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_EVENTS:
            return {
                ...state,
                events: fetchEvents(),
            }

        case CLEAR_VALUES:
            return {
                ...state,
                eventDeleted: false,
                eventSaved: false,
                eventUpdated: false,
            }

        case CREATE_EVENT:
            return {
                ...state,
                eventSaved: true,
                events: saveEvent(action.payload),
            }

        case UPDATE_EVENT:
            return {
                ...state,
                eventUpdated: true,
                events: updateEvent(action.payload),
            }

        case DELETE_EVENT:
            return {
                ...state,
                eventDeleted: true,
                events: deleteEvent(action.payload),
            }

        default:
            return state;
    }
}

const fetchEvents = (normalized = false) => {
    const events = localStorage.getItem('events');

    if (events !== null) {
        const data = normalize({ events: JSON.parse(events) }, eventsSchema);

        if (normalized === true) {
            return data;
        }

        return data.entities.events;
    }

    return [];
}

const saveEvent = (event) => {
    const data = fetchEvents(true);
    let events = data;

    if (data.length === 0) {
        event.id = 1;
    } else {
        events = denormalize(
            { events: data.result.events },
            eventsSchema,
            data.entities
        ).events;

        event.id = events[events.length - 1].id + 1;
    }

    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));

    return fetchEvents();
}

const updateEvent = (event) => {
    const data = fetchEvents(true);
    const events = denormalize(
        { events: data.result.events },
        eventsSchema,
        data.entities
    ).events;

    const index = events.findIndex(item => item.id === event.id);

    if (index >= 0) {
        events[index] = event;
        localStorage.setItem('events', JSON.stringify(events));
    }

    return fetchEvents();
}

const deleteEvent = (eventId) => {
    const data = fetchEvents(true);
    const events = denormalize(
        { events: data.result.events },
        eventsSchema,
        data.entities
    ).events;

    const index = events.findIndex(item => item.id === eventId);

    if (index >= 0) {
        events.splice(index, 1);
        localStorage.setItem('events', JSON.stringify(events));
    }

    return fetchEvents();
}

export default eventReducer;
