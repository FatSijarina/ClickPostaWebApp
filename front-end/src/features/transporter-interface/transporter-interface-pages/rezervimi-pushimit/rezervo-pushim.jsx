import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import { DateRangePicker } from 'react-date-range';
import './rezervo-pushim-styles.scss';
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { toast } from 'react-toastify'

const RezervoPushim = () => {

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 6),
      key: 'selection'
    }
  ])
//   const { combine, allowedMaxDays, beforeToday } = DateRangePicker;


  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    document.addEventListener("keydown", hideMeESC, true)
    document.addEventListener("click", show, true)
  }, [])

  // hide dropdown on ESC press
  const hideMeESC = (e) => {
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  const show = (e) => {
    if( refOne.current && !refOne.current.contains(e.target) ) {
      setOpen(false)
    }
  }


  return (
    <div className="main-div-calendar">
        <h1>Zgjedh daten e pushimit</h1>
        <h3>Ju keni 7 dite te pushimit te cilat mund ti zgjedhni ne kalendarin me poshte!</h3>
        <div className="calendarWrap">
        <label className="startdate-label"> Start Date:</label>
        <input
        value={`${format(range[0].startDate, "MM/dd/yyyy")}`}
        readOnly
        className="inputBox"
        onClick={ () => setOpen(open => !open) }
        />
    
        <label className="enddate-label">End Date:</label>
        <input 
        value={`${format(range[0].endDate, "MM/dd/yyyy")}`}
        readOnly
        className="inputBox"
        onClick={ () => setOpen(open => !open) }
        />
       

    <div ref={refOne}>
        {open && 
          <DateRange
            // disabledDate={combine(allowedMaxDays(7), beforeToday())}
            onChange={item => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"        
          />
        }
      </div>
      <button type="submit" className="button-rezervimi" >Rezervo</button>
    </div>
    </div>
  )
}

export default RezervoPushim 