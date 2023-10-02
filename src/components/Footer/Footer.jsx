import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaGithub, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  const users = [
    {
      name: "Farouk Zemmouri",
      githubUsername: "farouk26",
      linkedinUrl: "https://www.linkedin.com/in/faroukisme",
    },
    {
      name: "Laid Bengli",
      githubUsername: "LaidBengli",
      linkedinUrl: "https://www.linkedin.com/in/laid-benglia-452013199/",
    },
    {
      name: "Rahem Sorour",
      githubUsername: "rahemsorour",
      linkedinUrl: "https://www.linkedin.com/in/sorour-rahem-93483a202/",
    },
    {
      name: "Oualid",
      githubUsername: "oualidelh",
      linkedinUrl: "https://www.linkedin.com/in/elhouari-oualid/",
    },
    {
      name: "Sami Babouche",
      githubUsername: "samiba6",
      linkedinUrl: "https://www.linkedin.com/in/sami-babouche-4400551b0/",
    },
  ]

  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const promises = users.map(async (user) => {
          const githubResponse = await fetch(
            `https://api.github.com/users/${user.githubUsername}`,
          )
          const githubData = await githubResponse.json()

          return {
            name: user.name,
            githubAvatarUrl: githubData.avatar_url,
            githubUrl: githubData.html_url,
            linkedinUrl: user.linkedinUrl,
          }
        })

        const userData = await Promise.all(promises)
        setUserData(userData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className="bg-slate-100 text-slate-800 mt-4">
      <div className="mb-4">
        <h2 className="text-blue text-1g mb-2 text-center md:text-center lg:text-center pt-1 pb-1">
          {" "}
          MADE BY{" "}
        </h2>
        <div className="flex flex-wrap justify-center">
          {userData.map((user, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2"
            >
              <div className="bg-gradient-to-r from-slate-50 to-slate-300 bg-opacity-20 p-2 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <img
                    src={user.githubAvatarUrl}
                    alt={`Avatar of ${user.name}`}
                    className="rounded-full h-8 w-8 mr-2"
                  />
                  <h3 className="text-white-500 text-sm">{user.name}</h3>
                </div>
                <div className="mt-1">
                  <p className="text-xs">
                    <FaGithub />
                    GitHub:{" "}
                    <a href={user.githubUrl} className="text-blue-600">
                      {user.githubUrl}
                    </a>
                  </p>
                  {user.linkedinUrl && (
                    <p className="text-xs">
                      <FaLinkedin />
                      LinkedIn:{" "}
                      <a href={user.linkedinUrl} className="text-blue-600">
                        LinkedIn Profile
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer footer-center p-2 bg-base-300 text-base-content">
        <aside>
          <p className="text-xs">
            Copyright © 2023 - All right reserved by Alibabalite Team
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
