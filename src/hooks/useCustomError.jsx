function useCustomError() {
    throw new Error('SET YOUR API KEY IN .env FILE AND DELETE useCustomError In src/pages/WeatherPage');
}

export default useCustomError;