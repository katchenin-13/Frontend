import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import DatePicker from "react-datepicker";
import fr from "date-fns/locale/fr";  // ✅ Import correct
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const locales = { fr };  // ✅ Utilisation correcte de la locale

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Grande Réunion",
        allDay: true,
        start: new Date(2025, 1, 2),
        end: new Date(2025, 1, 3),
    },
    {
        title: "Vacances",
        start: new Date(2024, 6, 7),
        end: new Date(2024, 6, 10),
    },
    {
        title: "Conférence",
        start: new Date(2024, 6, 20),
        end: new Date(2024, 6, 23),
    },
];

function MonCalendrier() {
    const [newEvent, setNewEvent] = useState({ title: "", start: null, end: null });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        if (!newEvent.title || !newEvent.start || !newEvent.end) {
            toast.error("Veuillez remplir tous les champs !");
            return;
        }

        for (let i = 0; i < allEvents.length; i++) {
            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

            if (((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) && (d4 <= d3))) {
                toast.error("⚠️ Conflit d'événements !");
                return;
            }
        }

        setAllEvents([...allEvents, newEvent]);
        toast.success("✅ Événement ajouté avec succès !");
        setNewEvent({ title: "", start: null, end: null });
    }

    function handleEventClick(event) {
        Swal.fire({
            title: event.title,
            html: `<strong>Date début :</strong> ${format(event.start, "dd/MM/yyyy HH:mm", { locale: fr })}<br>
                   <strong>Date fin :</strong> ${format(event.end, "dd/MM/yyyy HH:mm", { locale: fr })}<br>
                   <strong>Motif :</strong> ${event.title}`,
            icon: "info",
            confirmButtonText: "OK"
        });
    }

    return (
        <div className="App col-span-full xl:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl p-4">
            <ToastContainer />
            <h1>📅 Calendrier</h1>
            <h2>Ajouter un nouvel événement</h2>
            <div>
                <input
                    type="text"
                    placeholder="Ajouter un titre"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <DatePicker
                    placeholderText="Date de début"
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({ ...newEvent, start })}
                    locale={fr}  // ✅ Correction ici
                    dateFormat="dd/MM/yyyy HH:mm"
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={1}
                    timeCaption="Heure"
                />
                <DatePicker
                    placeholderText="Date de fin"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({ ...newEvent, end })}
                    locale={fr}  // ✅ Correction ici
                    dateFormat="dd/MM/yyyy HH:mm"
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={1}
                    timeCaption="Heure"
                />

                <button
                    style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}
                    onClick={handleAddEvent}
                >
                    Ajouter un événement
                </button>
            </div>
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px" }}
                culture="fr"
                onSelectEvent={handleEventClick}
                messages={{
                    next: "Suivant",
                    previous: "Précédent",
                    today: "Aujourd'hui",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour",
                    agenda: "Agenda",
                    showMore: (total) => `+ Voir plus (${total})`
                }}
            />
        </div>
    );
}

export default MonCalendrier;
