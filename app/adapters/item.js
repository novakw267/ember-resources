import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    // This is getting the API host
    let api = this.get('host');
    // This is using embers serialze method to create a  new record with a new ID
    let serialized = this.serialize(record, { includeId: true });
    // then we grab the list ID from the data
    let listId = serialized.list_Id;
    // we then define the URL
    let url = `${api}/lists/${listId}/items`;
    // Finally defining our data
    let data = { item: serialized };
// This is ember's adapter for ajax calls, it gets the url, verb, and data as
// parameters
    return this.ajax(url, 'POST', { data });
  },
});
