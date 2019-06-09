let time = Pasteboard.paste()
let url = "https://api.groupme.com/v3/groups/GROUPID/messages?token=TOKEN"
let request = new Request (url)
request.method = "POST"
request.headers = {"Content-Type" : "application/json"}
const body = {"message" : {"source_guid": "GUID", "text": "Be home in " + time}}
request.body = (JSON.stringify(body))
request.loadString()