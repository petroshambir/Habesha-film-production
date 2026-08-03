
import React, { useState, useEffect } from 'react';

const sectionsConfig = [
  { title: 'Weddings', storageKey: 'portfolio_weddings' },
  { title: 'Bridal Shoots', storageKey: 'portfolio_bridal' },
  { title: 'Baby Shower & Baptism', storageKey: 'portfolio_babyshower' }
];

function AdminDashboard() {
  const [sectionsData, setSectionsData] = useState({});

  useEffect(() => {
    fetch('https://habesha-film-production-server.onrender.com/api/projects')
      .then(res => res.json())
      .then(data => {
        const dataMap = {};
        data.forEach(item => {
          // ካብቲ ሰርቨር ዝመጽእ ጽሑፍ ጸሪና ንዕቀቦ
          let parsedDescriptions = [];
          let parsedHeadings = [];
          
          try {
            if (typeof item.description === 'string' && item.description.includes('||DESCS||')) {
              const parts = item.description.split('||DESCS||');
              parsedDescriptions = JSON.parse(parts[1] || '[]');
              parsedHeadings = JSON.parse(parts[2] || '[]');
            }
          } catch (e) {
            console.log("Parsing error", e);
          }

          dataMap[item.title] = {
            ...item,
            desc: item.desc || item.description || '',
            descriptions: item.descriptions || parsedDescriptions,
            headings: item.headings || parsedHeadings
          };
        });
        setSectionsData(dataMap);
      })
      .catch(err => console.error("Error loading admin data:", err));
  }, []);

  const handleSave = async (title, data) => {
    try {
      // ሰርቨርካ ን descriptions ብቐጥታ ክቕበሎ ስለዘይክእል፡ 
      // ንሕና ነቲ ዝጸሓፍናዮ ጽሑፋት ብሓደ መልክዕ (Stringified) ኣብቲ "description" ዝብል ሰርቨር ዝፈልጦ Field ንሰዶ
      const combinedPayloadString = `${data.desc || ''}||DESCS||${JSON.stringify(data.descriptions || [])}||DESCS||${JSON.stringify(data.headings || [])}`;

      const payload = {
        ...data,
        description: combinedPayloadString,
        desc: data.desc,
        descriptions: data.descriptions,
        headings: data.headings
      };

      const res = await fetch(`https://habesha-film-production-server.onrender.com/api/projects/${title}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!res.ok) throw new Error("Failed to save");
      alert(`ብሰላም ናብ ዳታቤዝ ተዓቂቡ ኣሎ! (${title})`);
    } catch (err) {
      console.error("Error saving to DB", err);
      alert("ዓወት ኣይተረኽበን! መርመሮ (F12 Console)");
    }
  };

  return (
    <div className="p-4 md:p-8 bg-zinc-950 min-h-screen text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-amber-500">Admin Content Manager</h1>

      {sectionsConfig.map((section) => {
        const currentData = sectionsData[section.title] || { names: '', desc: '', images: [], descriptions: [], headings: [] };

        return (
          <SectionRenderer 
            key={section.title}
            title={section.title} 
            data={currentData} 
            setData={(newData) => setSectionsData({ ...sectionsData, [section.title]: newData })} 
            onSave={() => handleSave(section.title, currentData)} 
          />
        );
      })}
    </div>
  );
}

function SectionRenderer({ title, data, setData, onSave }) {
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('images', file);

    try {
      const res = await fetch(`https://habesha-film-production-server.onrender.com/api/projects/${title}/upload`, {
        method: 'POST',
        body: formData
      });

      if (!res.ok) throw new Error("Upload failed");
      
      const result = await res.json();
      const newImages = result.images;
      
      const defaultHeading = `Featured Moment ${newImages.length}`;
      const defaultDesc = `0${newImages.length}. A wonderful captured memory of the special day.`;

      const updatedHeadings = [...(data.headings || []), defaultHeading];
      const updatedDescriptions = [...(data.descriptions || []), defaultDesc];

      const newData = {
        ...data,
        images: newImages,
        headings: updatedHeadings,
        descriptions: updatedDescriptions
      };

      setData(newData);
      alert("ስእሊ ተሰቒሉ ኣሎ!");
    } catch (err) {
      console.error("Upload Error:", err);
      alert("ስእሊ ክስቀል ኣይከኣለን!");
    }
  };

  const deleteImage = async (imgIndex) => {
    const updatedImages = data.images.filter((_, i) => i !== imgIndex);
    const updatedHeadings = (data.headings || []).filter((_, i) => i !== imgIndex);
    const updatedDescriptions = (data.descriptions || []).filter((_, i) => i !== imgIndex);

    const newData = { 
      ...data, 
      images: updatedImages,
      headings: updatedHeadings,
      descriptions: updatedDescriptions
    };
    setData(newData);
  };

  const handleHeadingChange = (index, value) => {
    const updatedHeadings = [...(data.headings || [])];
    updatedHeadings[index] = value;
    setData({ ...data, headings: updatedHeadings });
  };

  const handleDescriptionChange = (index, value) => {
    const updatedDescriptions = [...(data.descriptions || [])];
    updatedDescriptions[index] = value;
    setData({ ...data, descriptions: updatedDescriptions });
  };

  return (
    <div className="mb-16 p-4 md:p-8 border border-zinc-700 rounded-2xl bg-zinc-900 shadow-2xl overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b border-zinc-700 pb-4 gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-amber-300">{title} Control Panel</h2>
        <button onClick={onSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold w-full sm:w-auto">
          Save {title}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div className="flex flex-col w-full">
          <label className="block text-zinc-400 mb-2">Names / Title:</label>
          <input 
            type="text" 
            value={data.names || ''}
            onChange={(e) => setData({ ...data, names: e.target.value })}
            className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white mb-6 box-border"
            placeholder="ማእከላይ ሽም (ንኣብነት Sara & Robel)"
          />

          <label className="block text-zinc-400 mb-2">Section Main Description (መግለጫ):</label>
          <textarea 
            rows="3"
            value={data.desc || ''}
            onChange={(e) => setData({ ...data, desc: e.target.value })}
            className="bg-zinc-800 border border-zinc-600 p-3 rounded-lg w-full text-white focus:outline-none focus:border-amber-400 transition-colors box-border"
            placeholder="እዚ ስራሕ እዚ ዝገልጽ ጽሑፍ ኣብዚ ጽሓፍ..."
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="block text-zinc-400 mb-2">Upload Image:</label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
            <input 
              type="file" 
              onChange={handleImageUpload} 
              className="text-zinc-400 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-amber-500 file:text-black hover:file:bg-amber-400 w-full overflow-hidden" 
            />
          </div>
        </div>
      </div>

      {/* ነፍስወከፍ ስእሊ መግለጺ ንምጽሓፍ */}
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold text-amber-400 border-b border-zinc-800 pb-2">Manage Image Headings & Descriptions</h3>
        {data.images && data.images.map((img, index) => {
          const defaultHeading = `Featured Moment ${index + 1}`;
          const defaultDesc = `0${index + 1}. A wonderful captured memory of the special day.`;

          return (
            <div key={index} className="flex flex-col md:flex-row gap-4 p-4 bg-zinc-800/50 border border-zinc-700 rounded-xl items-center">
              <div className="relative w-28 h-28 flex-shrink-0 border border-zinc-700 rounded-lg overflow-hidden">
                <img src={img} className="w-full h-full object-cover" alt="upload" />
                <button onClick={() => deleteImage(index)} className="absolute top-0 right-0 bg-red-600 text-white px-2 py-0.5 text-xs font-bold">&times;</button>
              </div>
              <div className="flex-1 w-full space-y-3">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Image {index + 1} Heading:</label>
                  <input 
                    type="text"
                    value={data.headings && data.headings[index] !== undefined ? data.headings[index] : defaultHeading}
                    onChange={(e) => handleHeadingChange(index, e.target.value)}
                    className="bg-zinc-900 border border-zinc-700 p-2 rounded w-full text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Image {index + 1} Description:</label>
                  <input 
                    type="text"
                    value={data.descriptions && data.descriptions[index] !== undefined ? data.descriptions[index] : defaultDesc}
                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                    className="bg-zinc-900 border border-zinc-700 p-2 rounded w-full text-sm text-white"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminDashboard;