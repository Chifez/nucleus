import Chip from '@/components/Chip';

const Table = () => {
  const item = new Array(20).fill(10);
  const PLAN_STYLES = {
    basic: 'text-[#4ac7f8] bg-[#eaf9ff]',
    teams: 'text-[#fa954e] bg-[#fff2e9]',
    enterprise: 'text-[#734cff] bg-[#ede8ff]',
  };

  const STATUS = {
    pending: 'text-[#fa954e] bg-[#fff2e9]',
    paid: 'text-green-300 bg-green-100',
    due: 'text-red-300 bg-red-100',
  };
  return (
    <div className="w-full">
      {/* <p>Invoice Table</p> */}
      <div className="bg-white rounded-md">
        <head className="w-full h-[6vh] flex justify-between gap-1 border-b px-4">
          <p className="w-[5%] flex items-center justify-start text-sm font-semibold">
            #
          </p>
          <p className="flex-1 flex items-center justify-start  text-sm font-semibold">
            Customser ID
          </p>
          <p className="flex-1 flex items-center justify-start  text-sm font-semibold">
            Customser Name
          </p>
          <p className="w-[12%] flex items-center justify-start  text-sm font-semibold">
            Plan
          </p>
          <p className="w-[10%] flex items-center justify-start  text-sm font-semibold">
            API calls
          </p>
          <p className="w-[10%] flex items-center justify-start  text-sm font-semibold">
            Date
          </p>
          <p className="w-[10%] flex items-center justify-start  text-sm font-semibold">
            Price
          </p>
          <p className="w-[10%] flex items-center justify-start  text-sm font-semibold">
            Status
          </p>
        </head>
        <body className="w-full h-[60vh] border-b overflow-y-scroll scrollbar-hide">
          {item.map((user, idx) => (
            <div
              className={`w-full h-fit py-2 overflow-y-auto flex justify-between gap-1 px-4  border-b cursor-default ${
                idx % 2 !== 0 && 'bg-gray-50'
              } `}
              key={idx}
            >
              <p className="w-[5%] flex items-center justify-start text-sm">
                {idx + 1}
              </p>
              <p className="flex-1 flex items-center justify-start text-sm">
                #32A238BJW
              </p>
              <p className="flex-1 flex items-center justify-start text-sm">
                Victor Adams
              </p>
              <p className="w-[12%] flex items-center justify-start">
                <Chip value={'Enterprise'} style={PLAN_STYLES.enterprise} />
              </p>
              <p className="w-[10%] flex items-center justify-center text-sm">
                2500
              </p>
              <p className="w-[10%] flex items-center justify-start  text-sm">
                22/01/23
              </p>
              <p className="w-[10%] flex items-center justify-start  text-sm">
                $300
              </p>
              <p className="w-[10%] flex items-center justify-start">
                <Chip value={'Pending'} style={STATUS.pending} />
              </p>
            </div>
          ))}
        </body>
        <footer className="w-full h-[6vh]"></footer>
      </div>
    </div>
  );
};
export default Table;
