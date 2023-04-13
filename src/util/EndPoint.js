require('dotenv').config();
const domain = process.env.VUE_APP_URL_API_REST;
export const api = {
    base: domain,
    auth: `${domain}/auth`,
    site: {
        syncReportReported: `${domain}/processSimit/syncReportedSimit`,
        findLastDateSyncSimit: `${domain}/processSimit/findLastDateSync`,
        findReportedSimit: `${domain}/processSimit/findReported`
    },
    client:{
        list: `${domain}/clients`,
        save: `${domain}/clients`,
        update: `${domain}/clients/`,
        delete: `${domain}/clients/`
    }
}