"use client"

const generateRandomNumber = (count: number): number =>{
  return Math.floor(Math.random() * count)
}

const Pages = () => {

    const random = generateRandomNumber(2)

    if(random === 1)
      throw new Error('Error Loading Services')

    
  return (
    <h1>Serveices</h1>
  )
}

export default Pages