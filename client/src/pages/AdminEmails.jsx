import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function AdminEmails() {
  const [emails, setEmails] = useState({ contact: [], careers: [] });
  const [responses, setResponses] = useState({ contact: [], careers: [] });
  const [newEmail, setNewEmail] = useState("");
  const [selectedType, setSelectedType] = useState("contact");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [expandedResponse, setExpandedResponse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const [emailsRes, responsesRes] = await Promise.all([
        fetch("https://joinbotics-backend.onrender.com/api/admin/emails"),
        fetch("https://joinbotics-backend.onrender.com/api/admin/responses")
      ]);

      if (!emailsRes.ok) {
        throw new Error(`Failed to fetch emails: ${emailsRes.status}`);
      }
      if (!responsesRes.ok) {
        throw new Error(`Failed to fetch responses: ${responsesRes.status}`);
      }

      const emailsData = await emailsRes.json();
      const responsesData = await responsesRes.json();
      setEmails(emailsData);
      setResponses(responsesData);
    } catch (err) {
      setError(`Error: ${err.message}. Is the server running on http://localhost:5000?`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddEmail = async (e) => {
    e.preventDefault();
    
    if (!newEmail.trim()) {
      setError("Please enter an email address");
      return;
    }

    try {
      setError("");
      setMessage("");
      
      const response = await fetch("https://joinbotics-backend.onrender.com/api/admin/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: selectedType,
          email: newEmail.trim()
        })
      });

      const data = await response.json();

      if (response.ok) {
        setEmails(prev => ({
          ...prev,
          [selectedType]: data.emails
        }));
        setNewEmail("");
        setMessage(`Email added successfully to ${selectedType} list`);
      } else {
        setError(data.error || "Failed to add email");
      }
    } catch (err) {
      setError("Error adding email");
      console.error(err);
    }
  };

  const handleDeleteEmail = async (type, index) => {
    try {
      setError("");
      setMessage("");
      
      const response = await fetch(
        `https://joinbotics-backend.onrender.com/api/admin/emails/${type}/${index}`,
        { method: "DELETE" }
      );

      const data = await response.json();

      if (response.ok) {
        setEmails(prev => ({
          ...prev,
          [type]: data.emails
        }));
        setMessage("Email removed successfully");
      } else {
        setError(data.error || "Failed to remove email");
      }
    } catch (err) {
      setError("Error removing email");
      console.error(err);
    }
  };

  const handleDeleteResponse = async (type, responseId) => {
    try {
      setError("");
      setMessage("");
      
      const response = await fetch(
        `https://joinbotics-backend.onrender.com/api/admin/responses/${type}/${responseId}`,
        { method: "DELETE" }
      );

      const data = await response.json();

      if (response.ok) {
        setResponses(prev => ({
          ...prev,
          [type]: prev[type].filter(r => r.id !== responseId)
        }));
        setMessage("Response deleted successfully");
      } else {
        setError(data.error || "Failed to delete response");
      }
    } catch (err) {
      setError("Error deleting response");
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#220b34] to-[#1a0a2e] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#220b34] to-[#1a0a2e] py-20 px-4 sm:px-6 pt-40">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Email Management
          </h1>
          <p className="text-gray-400 text-lg">
            Configure which emails receive form submissions
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
            {error}
          </div>
        )}

        {/* Add Email Form */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">Add New Email</h2>
          
          <form onSubmit={handleAddEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#c11e38]"
              >
                <option value="contact" className="bg-[#220b34]">Contact Form</option>
                <option value="careers" className="bg-[#220b34]">Careers Form</option>
              </select>

              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter email address"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c11e38]"
              />

              <button
                type="submit"
                className="px-6 py-3 bg-[#c11e38] hover:bg-[#a01a2e] text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
              >
                <FaPlus /> Add Email
              </button>
            </div>
          </form>
        </div>

        {/* Contact Form Emails */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Contact Form Recipients
          </h2>
          
          {emails.contact && emails.contact.length > 0 ? (
            <div className="space-y-3">
              {emails.contact.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <span className="text-white">{email}</span>
                  <button
                    onClick={() => handleDeleteEmail("contact", index)}
                    className="text-red-400 hover:text-red-300 transition flex items-center gap-2"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No emails configured yet</p>
          )}
        </div>

        {/* Careers Form Emails */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Careers Form Recipients
          </h2>
          
          {emails.careers && emails.careers.length > 0 ? (
            <div className="space-y-3">
              {emails.careers.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg"
                >
                  <span className="text-white">{email}</span>
                  <button
                    onClick={() => handleDeleteEmail("careers", index)}
                    className="text-red-400 hover:text-red-300 transition flex items-center gap-2"
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No emails configured yet</p>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-3">ℹ️ How it works</h3>
          <ul className="text-blue-200/80 space-y-2">
            <li>• Add multiple email addresses for each form type</li>
            <li>• All form submissions will be sent to all configured emails</li>
            <li>• The form submitter also receives a confirmation email</li>
            <li>• You can add or remove emails at any time</li>
          </ul>
        </div>

        {/* Responses Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Form Responses</h2>
          <p className="text-gray-400 mb-8">All submitted form data is saved here for quick access</p>

          {/* Contact Form Responses */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Form Submissions ({responses.contact?.length || 0})
            </h3>
            
            {responses.contact && responses.contact.length > 0 ? (
              <div className="space-y-4">
                {responses.contact.map((response) => (
                  <div
                    key={response.id}
                    className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedResponse(
                          expandedResponse === response.id ? null : response.id
                        )
                      }
                      className="w-full p-4 flex items-center justify-between hover:bg-white/10 transition"
                    >
                      <div className="text-left">
                        <p className="text-white font-semibold">{response.name}</p>
                        <p className="text-gray-400 text-sm">{response.email}</p>
                        <p className="text-gray-500 text-xs mt-1">{response.timestamp}</p>
                      </div>
                      {expandedResponse === response.id ? (
                        <FaChevronUp className="text-white" />
                      ) : (
                        <FaChevronDown className="text-gray-400" />
                      )}
                    </button>

                    {expandedResponse === response.id && (
                      <div className="p-4 border-t border-white/10 bg-white/[0.02] space-y-3">
                        <div>
                          <p className="text-gray-400 text-sm">Phone</p>
                          <p className="text-white">{response.phone}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Inquiry Type</p>
                          <p className="text-white">{response.inquiryType}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Message</p>
                          <p className="text-white whitespace-pre-wrap">{response.message}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteResponse("contact", response.id)}
                          className="mt-4 w-full px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg flex items-center justify-center gap-2 transition"
                        >
                          <FaTrash /> Delete Response
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No submissions yet</p>
            )}
          </div>

          {/* Careers Form Responses */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Careers Form Submissions ({responses.careers?.length || 0})
            </h3>
            
            {responses.careers && responses.careers.length > 0 ? (
              <div className="space-y-4">
                {responses.careers.map((response) => (
                  <div
                    key={response.id}
                    className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedResponse(
                          expandedResponse === response.id ? null : response.id
                        )
                      }
                      className="w-full p-4 flex items-center justify-between hover:bg-white/10 transition"
                    >
                      <div className="text-left">
                        <p className="text-white font-semibold">{response.name}</p>
                        <p className="text-gray-400 text-sm">{response.position}</p>
                        <p className="text-gray-500 text-xs mt-1">{response.timestamp}</p>
                      </div>
                      {expandedResponse === response.id ? (
                        <FaChevronUp className="text-white" />
                      ) : (
                        <FaChevronDown className="text-gray-400" />
                      )}
                    </button>

                    {expandedResponse === response.id && (
                      <div className="p-4 border-t border-white/10 bg-white/[0.02] space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-400 text-sm">Email</p>
                            <p className="text-white break-all">{response.email}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Phone</p>
                            <p className="text-white">{response.phone}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Position</p>
                            <p className="text-white">{response.position}</p>
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">Location</p>
                            <p className="text-white">{response.location}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Experience</p>
                          <p className="text-white">{response.experience}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Cover Letter</p>
                          <p className="text-white whitespace-pre-wrap">{response.coverLetter}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteResponse("careers", response.id)}
                          className="mt-4 w-full px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg flex items-center justify-center gap-2 transition"
                        >
                          <FaTrash /> Delete Response
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400">No submissions yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
