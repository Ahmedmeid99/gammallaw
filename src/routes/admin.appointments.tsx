import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import {
  type AppointmentRecord,
  type AppointmentStatus,
  listAppointments,
  updateAppointmentStatus,
} from "../server/appointments";

export const Route = createFileRoute("/admin/appointments")({
  component: AppointmentAdminPage,
  head: () => ({
    meta: [
      { title: "Appointment Requests | MG LAW" },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
});

function AppointmentAdminPage() {
  const [key, setKey] = useState("");
  const [appointments, setAppointments] = useState<AppointmentRecord[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const loadRequests = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setLoading(true);
    setError("");
    try {
      setAppointments(await listAppointments({ data: { key } }));
      setAuthenticated(true);
    } catch (requestError) {
      setAuthenticated(false);
      setError(requestError instanceof Error ? requestError.message : "Unable to open requests.");
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (id: string, status: AppointmentStatus) => {
    setError("");
    try {
      const updated = await updateAppointmentStatus({ data: { key, id, status } });
      setAppointments((current) =>
        current.map((appointment) => (appointment.id === id ? updated : appointment)),
      );
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to update request.");
    }
  };

  const pendingCount = appointments.filter((item) => item.status === "pending").length;

  return (
    <div id="top" className="site-shell appointment-admin-page">
      <SiteHeader />
      <main className="appointment-admin-shell">
        <header className="appointment-admin-header">
          <div>
            <p className="eyebrow">Private owner workspace</p>
            <h1>Appointment requests</h1>
            <p>Review new consultations and approve or reject each requested time.</p>
          </div>
          {authenticated && (
            <div className="pending-counter">
              <strong>{pendingCount}</strong>
              <span>Pending</span>
            </div>
          )}
        </header>

        {!authenticated ? (
          <form className="owner-login" onSubmit={loadRequests}>
            <label htmlFor="owner-key">Owner access key</label>
            <div>
              <input
                id="owner-key"
                type="password"
                value={key}
                onChange={(event) => setKey(event.target.value)}
                autoComplete="current-password"
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Opening…" : "Open requests"}
              </button>
            </div>
            {import.meta.env.DEV && <small>Local development key: mg-law-owner</small>}
          </form>
        ) : (
          <>
            <div className="admin-toolbar">
              <p>
                {appointments.length} request{appointments.length === 1 ? "" : "s"}
              </p>
              <button type="button" onClick={() => loadRequests()} disabled={loading}>
                {loading ? "Refreshing…" : "Refresh"}
              </button>
            </div>

            {appointments.length === 0 ? (
              <div className="admin-empty-state">
                <h2>No requests yet</h2>
                <p>New visitor appointment requests will appear here.</p>
              </div>
            ) : (
              <div className="appointment-request-list">
                {appointments.map((appointment) => (
                  <article className="appointment-request-card" key={appointment.id}>
                    <header>
                      <div>
                        <span className={`request-status status-${appointment.status}`}>
                          {appointment.status}
                        </span>
                        <h2>{appointment.name}</h2>
                        <p>{appointment.reference}</p>
                      </div>
                      <time dateTime={appointment.createdAt}>
                        Received {new Date(appointment.createdAt).toLocaleString("en-GB")}
                      </time>
                    </header>
                    <dl>
                      <div>
                        <dt>Requested appointment</dt>
                        <dd>
                          {appointment.date} · {appointment.time}
                        </dd>
                      </div>
                      <div>
                        <dt>Office</dt>
                        <dd>{appointment.office}</dd>
                      </div>
                      <div>
                        <dt>Practice area</dt>
                        <dd>{appointment.practiceArea}</dd>
                      </div>
                      <div>
                        <dt>Contact</dt>
                        <dd>
                          <a href={`mailto:${appointment.email}`}>{appointment.email}</a>
                          <a href={`tel:${appointment.phone}`}>{appointment.phone}</a>
                        </dd>
                      </div>
                    </dl>
                    {appointment.notes && <p className="request-notes">{appointment.notes}</p>}
                    <footer>
                      <a
                        href={`mailto:${appointment.email}?subject=MG Law appointment ${appointment.reference}`}
                      >
                        Email visitor
                      </a>
                      <div>
                        <button
                          type="button"
                          className="reject-request"
                          onClick={() => changeStatus(appointment.id, "rejected")}
                        >
                          Reject
                        </button>
                        <button
                          type="button"
                          className="approve-request"
                          onClick={() => changeStatus(appointment.id, "approved")}
                        >
                          Approve
                        </button>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
        {error && <p className="appointment-error admin-error">{error}</p>}
      </main>
    </div>
  );
}
