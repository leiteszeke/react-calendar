// Actions
import {
    CLEAR_VALUES,
    FETCH_EVENTS,
    CREATE_EVENT,
	UPDATE_EVENT,
	DELETE_EVENT,
} from '../actions';

export const clearValues = () => ({
	type: CLEAR_VALUES,
	payload: {},
});

export const fetchEvents = () => ({
	type: FETCH_EVENTS,
	payload: {},
});

export const saveEvent = (event = {}) => ({
	type: CREATE_EVENT,
	payload: event,
});

export const updateEvent = (event = {}) => ({
	type: UPDATE_EVENT,
	payload: event,
});

export const deleteEvent = (eventId = {}) => ({
	type: DELETE_EVENT,
	payload: eventId,
});

export default {};
