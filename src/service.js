
// Generate service metadata
metadata = () => {
    let lastcommitsha = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString().trim();
    return JSON.parse(`
        {"${process.env.npm_package_name}": {
            "version": "${process.env.npm_package_version}",
            "description" : "${process.env.npm_package_description}",
            "lastcommitsha": "${lastcommitsha}"
        }
    }`);
}

// Generate service health
health = () => {
    return 'OK';
}


module.exports = {
    metadata,
    health
}