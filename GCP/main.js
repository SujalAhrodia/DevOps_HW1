/*
    CSC 519: DevOps
    Spring 2019
    Name: Sujal
    UnityID: ssujal
    Cloud Provider: Google Cloud Platform
*/

const Compute = require('@google-cloud/compute');
const compute = new Compute();
const http = require('http');

const zone = compute.zone('us-east1-b'); //region (continent-part-zone)

class GCPProvider
{
    // Creates a new VM using the latest Ubuntu image.
    async createInstance()
    {
        try {
        const data = await zone.createVM(
            'myinstance', //configuration name 
            { 
                os: 'ubuntu', // OS definition
                http: true    // provide external IP
            }
        );
        const operation = data[1];
        await operation.promise();
        
            console.log('Virtual machine created');
        } 
        catch (error) 
        {
            console.error(error);
        }
    }
    // Prints the instance information
    async printInfo()
	{
        const vm = zone.vm('myinstance');

        const metadata = await vm.getMetadata();
        const ip = metadata[0].networkInterfaces[0].accessConfigs[0].natIP;

        console.log(`IP address: http://${ip}`);
	}
};

async function provision()
{
    let client = new GCPProvider();

    await client.createInstance();
    await client.printInfo();
}

(async () => {
	await provision();
})();
