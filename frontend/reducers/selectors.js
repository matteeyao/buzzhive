export const selectAllHives = (state) => {
    return Object.values(state.entities.hives)
}


// export const selectPokemonMovesNames = (state) => {
//     const moveNames = Object.values(state.entities.moves).map(move => {
//         return move.name;
//     })
//     return moveNames;
// }