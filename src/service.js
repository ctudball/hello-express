
// Generate service metadata
metadata = () => {
    let lastcommitsha = process.env.TRAVIS_COMMIT? process.env.TRAVIS_COMMIT : "Unknown";
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