function SearchBox() {
  return (
    <form>
      <div class="flex space-x-1 mt-2 lg:mt-1">
        <input
          type="search"
          class="grow border rounded border-black p-3 outline-none"
          placeholder="Covers Which Area? Locality?"
        />
        <button class="bg-orange-600 rounded py-3 px-2 lg:w-40 text-white">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBox;
