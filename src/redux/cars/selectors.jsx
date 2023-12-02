export const selectIsRefreshing = (state) => state.cars.isRefreshing;

export const selectCarsList = (state) => state.cars.items;

export const selectCarsEror = (state) => state.cars.error;
