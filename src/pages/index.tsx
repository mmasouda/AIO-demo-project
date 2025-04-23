import { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import { RootState } from "../redux/store";
import { useSelector } from 'react-redux';
import { Card, Search, Dropdown } from '../components';
import { IItem } from '../types';

const myFont = localFont({ src: '../font/Neutra Text Light.otf' });

const Index = () => {
  const [arr, setArr] = useState([] as IItem[]);
  const [gameType, setGameType] = useState("All Games");
  const [gameProvider, sameProvider] = useState("All Providers");
  const [searchMode, setSearchMode] = useState(false);
  const games = useSelector((state: RootState) => state.store.games as IItem[]);
  // useEffect(() => {
  //   dispatch(fetchPosts() as unknown as UnknownAction);
  // }, []);
  useEffect(() => {
    if (gameType !== "All Games") {
      const array = games.filter((game) => game.categoryName === gameType);
      setSearchMode(true);
      setArr(array as IItem[]);
    } else {
      setArr([]);
      setSearchMode(false);
    }
  }, [gameType]);

  useEffect(() => {
    if (gameProvider !== "All Providers") {
      const array = games.filter((game) => game.providerName === gameProvider);
      setSearchMode(true);
      setArr(array as IItem[]);
    } else {
      setArr([]);
      setSearchMode(false);
    }
  }, [gameProvider]);

  const gameTypes = ["All Games", "Slots", "Original Casino", "Live Casino"];
  const gameProviders = ["All Providers", "TaDa", "Belatra", "Platipus", "Wazdan", "Neko Games", "BC Originals", "BGaming", "Evolution Gaming", "FA CHAI", "Spadegaming", "YGR"];

  const handleSearch = (e: { target: { value: string } }) => {
    if (e.target.value.length > 0) {
      setSearchMode(true);
    } else {
      setSearchMode(false);
    }
    const array = games.filter((game) => game.fullName.includes(e.target.value as string));
    setArr(array as IItem[]);
  };

  return (
    <div
      className={`${myFont.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white'>All In One Assessment Project</h1>
      <main className="flex overflow-hidden flex-col gap-8 row-start-2 items-center sm:items-start border border-[#26272C] rounded-2xl">
        <div className=' flex w-full items-center justify-between h-16 p-2 bg-[#1D1E22]'>
          <Search onChange={handleSearch} />
          <div className='pr-4'>
            <Dropdown title='Provider' options={gameProviders} onClick={(type) => sameProvider(type)} />
            <Dropdown title='Game Type' options={gameTypes} onClick={(type) => setGameType(type)} />
          </div>
        </div>
        <div className="flex px-6 pb-6 gap-4 items-center flex-col sm:flex-row">
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
            {searchMode && arr.length > 0 ? arr.map((item: IItem, index: number) => <Card key={index} item={item} />)
              : searchMode && arr.length == 0 ? <p>No results...</p>
                : games.map((item, index) => <Card key={index} item={item} />)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
