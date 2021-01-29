// RETURNS THE STATE'S HIVES AS AN ARRAY OF HIVES
export const selectAllHives = (state) => {
    return Object.values(state.entities.hives)
}


