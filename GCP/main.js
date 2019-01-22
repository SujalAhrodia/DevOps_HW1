// Run `npm install @google-cloud/compute` first.
const Compute = require('@google-cloud/compute');
const compute = new Compute();

class GCPProvider
{
    // Creates a new VM using the latest Ubuntu image.
    async createInstance()
    {
        try {
        const zone = await compute.zone('us-central1-a');
        const data = await zone.createVM(
            'ubuntu-instance', 
            { os: 'ubuntu' }
        );
        const operation = data[1];
        await operation.promise();
        // Virtual machine created.
        } catch (error) {
        console.error(error);
        }
    }
    async printInfo()
	{
		//To do
	}
};

async function provision()
{
    let client = new GCPProvider();

    await client.createInstance();
    //await client.printInfo();
}

(async () => {
	await provision();
})();
