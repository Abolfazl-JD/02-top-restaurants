import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    shortcuts: {
        'nav-item': 'text-gray-300 duration-300 ease transition-all hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium',
        'header': 'text-size-1.25rem text-blue-600 m-0 mr-2rem py-0.5rem px-1rem font-bold w-4rem',
        'row': 'border-t border-solid border-t-#80808056 flex items-center py-2',
        'stats-container': 'flex mb-1rem',
        'status-title': 'w-20rem font-medium text-gray-800 text-size-2rem m-0 mr-5rem',
        'stats-paragraph': 'text-size-2rem m-0',
        'router-link-active' : 'bg-gray-700 text-white'
    },
})