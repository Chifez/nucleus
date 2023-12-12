import Map from './Map';

const UserLocation = () => {
  return (
    <div className="flex-1 rounded-md">
      <section className="h-full bg-white dark:bg-[#0c0c0d] dark:text-white overflow-hidden rounded-md px-5 py-2">
        <h3 className="font-semibold">Usage Demograph</h3>
        <div>
          <Map />
        </div>
      </section>
    </div>
  );
};
export default UserLocation;
