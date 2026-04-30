const approvalRequests = require('./data/approval-requests.json');
const apiStatus = require('./data/api-status.json');

module.exports = () => ({
    approvalRequests,
    apiStatus,
});
