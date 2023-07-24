const Dropdown = () => {
  const dropDownMenu = [
    {
      title: "Mark as complete",
    },
    {
      title: "Mark as send now",
    },

    {
      title: "Ignore",
    },
    {
      title: "Copy Message",
    },
    {
      title: "View order",
    },
  ];
  return (
    <div className="z-10 absolute top-8">
      <div className="w-40 mt-2 p-3 bg-white shadow rounded">
        <div className="flex items-center justify-between flex-col">
          <div className="flex items-center">
            <div className=" flex items-center flex-col">
              {dropDownMenu.map((menu) => (
                <p
                  key={menu.title}
                  className="text-sm leading-normal text-left text-gray-500 py-2 cursor-pointer"
                >
                  {menu.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
