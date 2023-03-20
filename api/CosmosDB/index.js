module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(req.body);
    // const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = req.body
        ? "Hello, " + req.body + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    if (req.body.readwrite === 'write') {
        delete req.body.readwrite;
        context.bindings.outputDocument = JSON.stringify(req.body);
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: responseMessage
        };
    }
    else if (req.body.readwrite === 'read') {
        context.res = { 
            // status: 200, /* Defaults to 200 */
        body: context.bindings.readDocument
        }
    }

    
}