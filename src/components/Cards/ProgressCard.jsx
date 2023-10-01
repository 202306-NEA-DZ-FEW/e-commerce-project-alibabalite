import { FaStar } from "react-icons/fa"

export default function ProgressCard() {
  return (
    <>
      <div className="flex justify-start gap-2 items-center">
        <span className="text-yellow-500">
          <FaStar />
        </span>
        5
        <progress
          className="progress progress-warning w-56"
          value="100"
          max="100"
        ></progress>
        10
      </div>
      <div className="flex justify-start gap-2 items-center">
        <span className="text-yellow-500">
          <FaStar />
        </span>
        4
        <progress
          className="progress progress-warning w-56"
          value="70"
          max="100"
        ></progress>
        33
      </div>
      <div className="flex justify-start gap-2 items-center">
        <span className="text-yellow-500">
          <FaStar />
        </span>
        3
        <progress
          className="progress progress-warning w-56"
          value="40"
          max="100"
        ></progress>
        5
      </div>
      <div className="flex justify-start gap-2 items-center">
        <span className="text-yellow-500">
          <FaStar />
        </span>
        2
        <progress
          className="progress progress-warning w-56"
          value="10"
          max="100"
        ></progress>
        4
      </div>
      <div className="flex justify-start gap-2 items-center">
        <span className="text-yellow-500">
          <FaStar />
        </span>
        1
        <progress
          className="progress progress-warning w-56"
          value="0"
          max="100"
        ></progress>
        0
      </div>
    </>
  )
}
