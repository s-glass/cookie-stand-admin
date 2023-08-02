import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.0/tailwind.min.css" rel="stylesheet" />
      </Head>
      <header className="p-4 text-white bg-green-500">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
      </header>
      <main className="container p-4 mx-auto w-500">
        <h2 className="mb-4 text-3xl text-center">Create Cookie Stand</h2>
        <form action="/create" method="post" className="grid grid-cols-1 gap-4 sm:grid-cols-5">
          <div className="sm:col-span-5">
            <label htmlFor="location" className="block mb-2">Location</label>
            <input type="text" name="location" id="location" className="w-full px-4 py-2 form-control" />
          </div>
          <div className="flex flex-col sm:col-span-1">
            <label htmlFor="min_customers_per_hour" className="block w-full mb-2 text-center">Minimum Customers per Hour</label>
            <input type="number" name="min_customers_per_hour" id="min_customers_per_hour" className="form-control" />
          </div>
          <div className="flex flex-col sm:col-span-1">
            <label htmlFor="max_customers_per_hour" className="block w-full mb-2 text-center">Maximum Customers per Hour</label>
            <input type="number" name="max_customers_per_hour" id="max_customers_per_hour" className="form-control" />
          </div>
          <div className="flex flex-col sm:col-span-1">
            <label htmlFor="max_customers_per_hour" className="block w-full mb-2 text-center">Average Cookies per Sale</label>
            <input type="number" name="max_customers_per_hour" id="max_customers_per_hour" className="form-control" />
          </div>
          <div className="flex items-center justify-center sm:col-span-2">
            <button type="submit" className="w-full px8 py-12 btn btn-primary">Create</button>
          </div>
        </form>
      </main>
      <div class="w-full h-full m-auto flex justify-center items-center justify-content-center">
        <p className='flex items-center justify-center py-20 align-middle'>Report Table Coming Soon...</p>
      </div>
      <footer className="p-4 text-left mt-10rem">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}