import cellMedics from '../assets/img/cellMedics.png'
import emiliaRescata from '../assets/img/emiliaRescata.png'
const Projects = () => {
  const profProject = [
    {
      id: 1,
      src: emiliaRescata,
      name: 'Emilia Rescata Animales',
      webSite: 'https://www.emiliarescataanimales.org/'
    },
    {
      id: 2,
      src: cellMedics,
      name: 'Cell Medics',
      webSite: 'https://cellmedics.netlify.app/'
    }
  ]
  const handleClickWebSite = (webSiteUrl) => {
    const newWebSite = window.open(webSiteUrl, '_blank')
    newWebSite.opener = null
    newWebSite.rel = 'noopener noreferrer'
  }
  return (
    <section
      id="Projects"
      className="relative w-full pt-16"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-lg gap-5">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="mb-10">
            <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">
              Professional projects
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6">
            {profProject.map(({ id, src, webSite }) => (
              <div
                key={id}
                className="shadow-md shadow-primary-color/60 rounded-lg max-w-md mx-auto hover:scale-105 duration-500"
              >
                <img
                  src={src}
                  alt="project card"
                  className="rounded-lg duration-200"
                />
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleClickWebSite(webSite)}
                    className="w-1/2 px-6 py-2 m-4 duration-200 hover:text-primary-color"
                  >
                    Website
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
