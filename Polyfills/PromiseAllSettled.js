// The Promise.allSettled() method returns a promise that resolves after all of the given promises have either 
// fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

if (!Promise.allSettled) {
    Promise.allSettled = promises =>
        Promise.all(
            promises.map((promise, i) =>
                promise
                    .then(value => ({
                        status: "fulfilled",
                        value,
                    }))
                    .catch(reason => ({
                        status: "rejected",
                        reason,
                    }))
            )
        );
}

Promise.allSettled(promises).then(console.log);