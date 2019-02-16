// Reducers
import reducer from '../../reducers/event';
// Actions
import {
    FETCH_EVENTS,
} from '../../actions';

describe('event reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            eventDeleted: false,
            eventSaved: false,
            eventUpdated: false,
        });
    });

    it('should handle FETCH_EVENTS', () => {
        const output = [];

        const action = {
            type: FETCH_EVENTS,
            payload: {},
        };

        expect(reducer({}, action)).toEqual({ events: output });
    });

    // Check to implement https://github.com/clarkbw/jest-localstorage-mock
    // in order to handle localStorage tests.
    /*
    it('should handle CREATE_EVENT', () => {
        const event = { title: 'Titulo 1', color: '#FFFFFF' };
        const events = [].push({ ...event, ...{ id: 1 } });

        const action = {
            type: CREATE_EVENT,
            payload: event,
        };

        expect(reducer({}, action)).toEqual({
            events: normalize({ events }, eventsSchema).entities,
            eventSaved: true
        });
    });
    */
});
