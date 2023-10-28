import classNames from "classnames/bind";
import styles from "./ChordsDetails.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Chords from "../../components/Chords";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import GUITAR from "../../assets/ImageForChords/Guitar";
import PIANO from "../../assets/ImageForChords/Piano";
import UKULELE from "../../assets/ImageForChords/Ukulele";
import Popup from "reactjs-popup";

const cx = classNames.bind(styles);

const KEY = ["C", "D", "E", "F", "G", "A", "B"];
const SUFFIX = ["major", "minor", "7", "m7", "maj7"];
const INSTRUMENT = ["Ukulele", "Guitar", "Piano"];


const DATA = [
    {
        type: "Guitar",
        value: GUITAR,
    },
    {
        type: "Piano",
        value: PIANO,
    },
    {
        type: "Ukulele",
        value: UKULELE,
    },
    {
        type: "All",
        value: [GUITAR, [
            {
                type: "Ukulele",
                img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Ukulele1_HiRes.jpg",
            }
        ],]
    }
]


function ChordsDetails() {

    // const [list, setList] = useState(DATA);

    const [key, setKey] = useState(KEY[0]);
    const [suffix, setSuffix] = useState(SUFFIX[0]);
    const [instrument, setInstrument] = useState(INSTRUMENT[1]);
    const [listChord, setListChord] = useState([]);

    const handleKeyChange = (e) => {
        setKey(e.target.value);
    }

    const handleSuffixChange = (e) => {
        setSuffix(e.target.value);
    }

    const handleInstrumentChange = (e) => {
        setInstrument(e.target.value);
    }

    // useEffect(() => {
    //     let listFilter = DATA.filter((list) => list.type === instrument);
    //     let listType = listFilter[0].value.map((item) => {
    //         return item;
    //     })
    //     setListChord(listType.flat(Infinity));
    // }, [])

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        if (key !== "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.key === key;
            });
            if (suffix !== "All") {
                list = list.filter(item => item.suffix === suffix);
            }
            setListChord(list);
        }
        // } else {
        //     setListChord(listType.flat(Infinity))
        // }
    }, [key])

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        if (suffix !== "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.suffix === suffix;
            });
            if (key !== "All") {
                list = list.filter(item => item.key === key);
            }
            setListChord(list);
        }
        // } else {
        //     setListChord(listType.flat(Infinity))
        // }
    }, [suffix])

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        // if(key !== "All" && suffix == "All") {
        //     let list = listType.flat(Infinity).filter((item) => {
        //         return item.key === key;
        //     });
        //     setListChord(list);
        // } else if(key === "All" && suffix !== "All") {
        //     let list = listType.flat(Infinity).filter((item) => {
        //         return item.suffix === suffix;
        //     });
        //     setListChord(list);
        if (key !== "All" && suffix !== "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.key === key && item.suffix === suffix;
            });
            setListChord(list)
            // }else {
            //     setListChord(listType.flat(Infinity));
        }
    }, [instrument])

    return (
        <div className={cx("list-header")}>
            <div className={cx("title-back")}>
                <h1 className={cx("title")}> CHORDS VARIATIONS</h1>

                <div className={cx("back")}></div>
            </div>
            <div>
                <nav className={cx("choice-header")} id="sidebar">
                    <div class="sidebar-header">
                        <h3>Chord collection</h3>
                    </div>
                    <div class="collection-box">
                        <h4>Key</h4>
                        <select id="chord-collection-keys" class="chord-collection-select" onChange={handleKeyChange} defaultValue={key}>
                            {KEY.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div class="collection-box">
                        <h4>Suffix</h4>
                        <select id="chord-collection-suffixes" class="chord-collection-select" onChange={handleSuffixChange} defaultValue={suffix}>
                            {SUFFIX.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div class="collection-box">
                        <h4>Instrument</h4>
                        <select id="chord-collection-suffixes" class="chord-collection-select" onChange={handleInstrumentChange} defaultValue={instrument}>
                            {INSTRUMENT.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <Popup trigger={<button className={cx("button-popup")} style={{padding: 10}} > Add to Playlist</button>} position="right center" closeOnDocumentClick on={['hover', 'focus']}>
                        <div className={cx("text-all")}>
                            <Link to="/myprofile"><div className={cx("link-text")}>My Account</div></Link>
                            <Link to="/listBeatPurchased"><div className={cx("link-text")}>My Purchased</div></Link>
                            <Link to="/viewcart"><div className={cx("link-text")}>My Song's Playlist</div></Link>
                            <Popup trigger={<button style={{ background: 'none' }} className={cx("button-popup")}> Add to Playlist +</button>} position="right center" closeOnDocumentClick on={['hover', 'focus']}>
                                <div className={cx("text-all")}>
                                    <input type="text" id="name" name="name" required minlength="4" maxlength="20" size="20" />
                                </div>
                            </Popup>
                        </div>
                    </Popup>
                </nav>
                <div className={cx("line")}>
                </div>
            </div>

            <div className={cx("list-chords")} style={{}}>
                {listChord.map((item) => {
                    return <img className={cx("detail-img")} style={{ width: 250, height: 260, objectFit: 'fill', marginLeft: 700 }} key={item.type} src={item.img} alt={item.type} />
                })}
                <p className={cx("img__description")}>This image looks super neat.<p style={{ marginTop: 35 }}>Description About Chords</p></p>
            </div>
        </div>

    );
}

export default ChordsDetails;