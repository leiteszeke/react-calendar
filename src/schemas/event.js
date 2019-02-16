// Dependencies
import { schema } from 'normalizr';

const eventSchema = new schema.Entity('events');

export const eventsSchema = {
    events: [ eventSchema ],
};
