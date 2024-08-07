function NewNote() {
  return (
    <div className="mt-10 flex justify-center items-center">
      <form method="post" className="border p-10 bg-gray-300 rounded-md">
        <p className=" gap-3 mb-3">
          <label htmlFor="title" className="mb-3 text-md">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="w-full outline-none text-black p-2 rounded-md"
          />
        </p>
        <p className=" gap-3">
          <label htmlFor="title">Content</label>
          <textarea
            name="content"
            id="content"
            rows="5"
            required
            className="w-full outline-none p-2 rounded-md"
          ></textarea>
        </p>
        <div className="flex text-center justify-center gap-3">
          <button className="bg-blue-800 p-3 m-4 rounded-md text-white">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewNote;
