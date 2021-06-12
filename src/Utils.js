const isArrayEmpty = (arr) =>
{
    if(arr !== undefined && arr !==null && arr.length >0)
    {
        return true;
    }
    return false;
}
const dumpLogs = (message) =>
    {
        console.log(message);
    }
    export default dumpLogs;