import { HomeFillIcon, TelescopeFillIcon, TelescopeIcon } from "@primer/octicons-react";
import { IconButton } from "components/presentation/icon-button";
import { useRef, useState } from "react";
import { useHistory } from "react-router";

export const AppShell = ({children}) => {
  const [isSearchFormActive, setIsSearchFormActive] = useState(false);
  const searchFormRef = useRef();
  
  const toggleSeachForm = () => {
    setIsSearchFormActive(!isSearchFormActive);
    if (searchFormRef.current) searchFormRef.current.classList.toggle('hidden');
  }
  
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  
  const history = useHistory();
  const nameInputRef = useRef();
  
  const handleFormSubmit = () => {
    history.push(`/${author}/${name}`);
    toggleSeachForm();
    clearForm();
    if (nameInputRef.current) nameInputRef.current.focus();
  };
  
  const clearForm = () => {
    setName('');
    setAuthor('');
  };
  
  // Strips any special character from value before updating state
  const transformAndSetState = (value, setter) => {
    setter(stripString(value));
  };
  
  const stripString = (string) => {
    const regex = /[^a-zA-Z0-9-_.]/g
    return string.replaceAll(regex, '');
  };
  
  return(
    <>
    <main className="min-h-screen w-screen bg-gray-900 text-white">
      {children}
      <div
        className='hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 flex flex-col justify-center items-center rounded-md backdrop-filter backdrop-blur-sm z-10'
        ref={searchFormRef}
      >
        <p className='text-3xl capitalize mb-10'>Explore a repository</p>
        <form
          className='flex flex-col justify-evenly items-center w-full'
          onSubmit={e => {
            e.preventDefault();
            handleFormSubmit();
          }}
        >
          <div className='flex justify-evenly items-center w-full m-2'>
            <input
              type='text'
              name='author'
              className='appearance-none border rounded focus:outline-none focus:shadow-outline text-gray-300 bg-gray-900 uppercase'
              placeholder='Author'
              onChange={e => transformAndSetState(e.currentTarget.value, setAuthor)}
              value={author}
              ref={nameInputRef}
            />
            <p className='text-xl'>/</p>
            <input
              type='text'
              name='name'
              className='appearance-none border rounded focus:outline-none focus:shadow-outline text-gray-300 bg-gray-900 uppercase'
              placeholder='Name'
              onChange={e => transformAndSetState(e.currentTarget.value, setName)}
              value={name}
            />
          </div>
          <input
            type='submit'
            className='invisible'
          />
        </form>
      </div>
    </main>
    <footer className="sticky bottom-0 p-2 flex justify-center bg-gray-800 text-white">
      <IconButton
        icon={<HomeFillIcon size={32} />}
        link='/'
      />
      {isSearchFormActive
        ? <IconButton
            icon={<TelescopeFillIcon size={32} />}
            onClick={toggleSeachForm}
          />
        : <IconButton
            icon={<TelescopeIcon size={32} />}
            onClick={toggleSeachForm}
          />
      }
    </footer>
    </>
  );
}