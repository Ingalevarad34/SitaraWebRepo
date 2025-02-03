import { useState } from "react";
import { Play, Pause, Volume2, Heart, Shuffle, Repeat, SkipBack, SkipForward, ListMusic, Mic, Maximize } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function BottomMusicBar() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="container-fluid bg-black text-white py-3 px-4">
            <div className="row align-items-center">
                {/* Song Info */}
                <div className="col-md-3 d-flex align-items-center">
                    <img src="/album-art.jpg" alt="Album Art" className="rounded img-fluid me-3" style={{ width: "50px", height: "50px" }} />
                    <div>
                        <p className="mb-0 fw-bold">Dreaming On</p>
                        <p className="mb-0 text-muted small">NEFFEX</p>
                    </div>
                    <Heart className="text-danger ms-3 cursor-pointer" />
                </div>

                {/* Controls */}
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center gap-3">
                        <Shuffle className="text-secondary cursor-pointer" />
                        <SkipBack className="text-secondary cursor-pointer" />
                        <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="btn btn-light btn-lg rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: "50px", height: "50px" }}
                        >
                            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                        </button>
                        <SkipForward className="text-secondary cursor-pointer" />
                        <Repeat className="text-secondary cursor-pointer" />
                    </div>

                    {/* Progress Bar */}
                    <div className="d-flex align-items-center w-100 mt-2">
                        <span className="text-muted small me-2">2:11</span>
                        <div className="progress flex-grow-1" style={{ height: "5px" }}>
                            <div className="progress-bar bg-light" style={{ width: "80%" }}></div>
                        </div>
                        <span className="text-muted small ms-2">2:42</span>
                    </div>
                </div>

                {/* Volume & Extra Options */}
                <div className="col-md-3 d-flex align-items-center justify-content-end gap-3">
                    <Mic className="text-secondary cursor-pointer" />
                    <ListMusic className="text-secondary cursor-pointer" />
                    <Maximize className="text-secondary cursor-pointer" />
                    <div className="d-flex align-items-center gap-2">
                        <Volume2 className="text-secondary cursor-pointer" />
                        <input type="range" className="form-range" style={{ width: "80px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BottomMusicBar;
