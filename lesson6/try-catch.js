async function fetchWithFallback() {
    try {
        const response = await fetch('https://fake-api');
        if (!response.ok) {
            throw new Error('Primary server is not responding');
        }
        return await response.json();
    } catch (error) {
        console.warn('Primary request failed, trying fallback...', error);
        try {
            const backupResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!backupResponse.ok) {
                throw new Error('Fallback server is not responding', { cause: error });
            }
            return await backupResponse.json();
        } catch (secondError) {
            throw new Error(
                'Both servers are unavailable. Please try again later.',
                { cause: secondError }
            );
        }
    }
}

fetchWithFallback()
    .then(data => console.log('Data:', data))
    .catch(error => console.error('Final error:', error.message));
