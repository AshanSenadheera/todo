import Image from 'next/image'

export default function Home () {
  return (
    
    <main>
      <div className='flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='text-3xl font-bold'>
          Welcome to{' '}
          <a className='text-blue-600' href='/'>
            ASLK Todo App!
          </a>
        </h1>
        <p className='mt-3 text-2xl'>
          These are your tasks{' '}</p>
        <table className='table-fixed w-full text-left border-collapse border border-gray-300 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Task 1</td>
              <td>
                In Progress
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Task 2</td>
              <td>
                Completed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </main>

  )
}
