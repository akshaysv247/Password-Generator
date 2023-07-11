// eslint-disable-next-line no-unused-vars
import {useState} from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {Numbers, specialCharcters, UppercaseLetters, LowercaseLetters} from '../characters';
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { COPY_SUCCESS, Err_MSG } from '../messages';

function Box() {
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("********");
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePassword = () => {
        if (!upperCase && !lowerCase && !numbers && !symbols) {
            notify(Err_MSG, true);
        }
        let characterList = '';
        if (upperCase) {
            characterList = characterList + UppercaseLetters
        }
        if (lowerCase) {
            characterList = characterList + LowercaseLetters
        }
        if (numbers) {
            characterList = characterList + Numbers
        }
        if (symbols) {
            characterList = characterList + specialCharcters
        }
        setPassword(createPassword(characterList))
    }
    const createPassword = (characterList) => {
        let code = ''
        const charLength = characterList.length

        for (let i = 0; i < length; i++) {
            const charcterIndex = Math.round(Math.random() * charLength)
            code = code + characterList.charAt(charcterIndex)
        }
        return code;
    }
    const copyToClipboard = () => {
        const newTextArea = document.createElement('textarea')
        newTextArea.innerText = password
        document.body.appendChild(newTextArea)
        newTextArea.select()
        document.execCommand('copy')
        newTextArea.remove()
    }
    const handleCopy = () => {
        if (password === '') {
            notify('Nothing to copy', true);
        } else {
            copyToClipboard()
            notify(COPY_SUCCESS)
        }
    }
    const notify = (message, hasErr = false) => {
        if (hasErr) {
            toast.error(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }else {
            toast(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
    }
  return (
    <div className='w-[90vw] sm:w-[30vw] h-[45vh] bg-[#49494963] flex flex-col items-center rounded p-8 text-white'>
        {/* <h1 className='text-white text-4xl font-semibold'>Random Password Generator</h1> */}
        <div className='flex flex-col w-[75vw] sm:w-[20vw] items-center mt-10'>
        <div className='flex w-full gap-2 justify-between items-center bg-[#1a351ae8]'>
            <h3 className='text-white text-xl font-semibold'>{password}</h3>
            <div className='bg-[green] p-2'>
            <button onClick={handleCopy}><ContentCopyIcon /></button>
            </div>
        </div>
        <div className='flex-col w-[75vw] sm:w-[20vw] h-full items-center mt-10'>
        <div className='flex w-full gap-2 justify-between'>
            <label>Password Length :</label>
            <input
            defaultValue={length}
             type ='number' 
             max='20' 
             min='8' 
             value={length} 
             className='w-12 text-black' 
             onChange={(e)=> setLength(e.target.value)}
            />
        </div>
        <div className='flex w-full gap-2 justify-between'>
            <label>Include Uppercase Letters :</label>
            <input
             type='checkbox'
             checked={upperCase}
             onChange={(e) => setUpperCase(e.target.checked)}
            />
        </div>
        <div className='flex w-full gap-2 justify-between'>
            <label>Include Lowercase Letters :</label>
            <input
             type='checkbox'
             checked={lowerCase}
             onChange={(e) => setLowerCase(e.target.checked)}
             />
        </div>
        <div className='flex w-full gap-2 justify-between'>
            <label>Include Numbers :</label>
            <input 
             type='checkbox'
             checked={numbers}
             onChange={(e) => setNumbers(e.target.checked)}
            />
        </div>
        <div className='flex w-full gap-2 justify-between'>
            <label>Include Symbols :</label>
            <input 
             type='checkbox'
             checked={symbols}
             onChange={(e) => setSymbols(e.target.checked)}
            />
        </div>
        <div className='flex w-full gap-2 justify-center mt-8'>
            <button className='w-fit p-2 bg-[#22a056] rounded-md' onClick={generatePassword}>Generate Password</button>
        </div>
        </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000} 
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  )
}

export default Box