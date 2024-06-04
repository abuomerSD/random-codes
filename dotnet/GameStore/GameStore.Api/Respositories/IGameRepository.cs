using GameStore.Api.Entities;

namespace GameStore.Api.Respositories;

interface IGameRepository {
    IEnumerable<Game> GetALL();
    Game? Get(int id);
    void Create(Game game);
    void Update(Game updatedGame);
    void Delete(int id);
}
