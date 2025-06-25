export const AddPetPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Форма добавления питомца
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Имя:</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Вид:</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Порода:</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Дата рождения:</label>
            <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Особые пометки:</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 h-24" />
          </div>

          <div>
            <label className="block font-medium mb-1">Фото:</label>
            <input type="file" className="text-sm text-gray-600" />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 text-white py-2 px-4 rounded hover:bg-teal-800 transition"
          >
            Добавить питомца
          </button>
        </form>
      </div>
    </div>
  );
};
