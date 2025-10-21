export default function VidPlayer({ vidName }) {
    return (
        <div className="w-full mx-auto ">
            <video className="m-auto mt-2 max-w-5xl rounded-2xl shadow-lg border-2 border-gray-700" src={`http://localhost:5001/videos/${vidName}`} controls></video>
        </div>
    );
}