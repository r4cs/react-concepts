import { useState, useEffect } from 'react';

// Custom hook to manage initial state with loading and error handling
export const useInitial = () => {
    const [status, setStatus] = useState({
        loading: false,
        error: false,
    });

    // Simulated async operation using useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Set loading to true before starting the async operation
                setStatus((prevState) => ({ ...prevState, loading: true }));

                // Simulate a delay for the async operation
                await new Promise((resolve) => setTimeout(resolve, 2000));

                // If successful, set loading to false
                setStatus((prevState) => ({ ...prevState, loading: false, error: false }));
            } catch (error) {
                // If an error occurs, set loading to false and error to true
                setStatus((prevState) => ({ ...prevState, loading: false, error: true }));
            }
        };

        // Call the async operation
        fetchData();
    }, []);

    // Return the current status
    return status;
};
