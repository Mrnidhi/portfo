import React from 'react';
import { Camera, Video, Film, Palette, Music, Code } from 'lucide-react';

interface Skill {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: 'Photography',
      icon: <Camera className="w-6 h-6" />,
      items: [
        'Event Photography',
        'Portrait Photography',
        'Landscape Photography',
        'Photo Editing',
        'Lightroom',
      ],
    },
    {
      category: 'Cinematography',
      icon: <Film className="w-6 h-6" />,
      items: [
        'Camera Operation',
        'Lighting Setup',
        'Shot Composition',
        'Color Grading',
        'DaVinci Resolve',
      ],
    },
    {
      category: 'Video Editing',
      icon: <Video className="w-6 h-6" />,
      items: [
        'Adobe Premiere Pro',
        'After Effects',
        'Motion Graphics',
        'Visual Effects',
        'Media Encoder',
      ],
    },
    {
      category: 'Design',
      icon: <Palette className="w-6 h-6" />,
      items: [
        'Photoshop',
        'Illustrator',
        'Canva',
        'Graphic Design',
        'Brand Identity',
      ],
    },
    {
      category: 'Audio',
      icon: <Music className="w-6 h-6" />,
      items: [
        'Audio Editing',
        'Sound Design',
        'Music Composition',
        'Voice-over',
        'Audition',
      ],
    },
    {
      category: 'Technical',
      icon: <Code className="w-6 h-6" />,
      items: [
        'Data Analytics',
        'Python',
        'SQL',
        'Machine Learning',
        'Data Visualization',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and creative expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Experience Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 rounded-lg px-6 py-3">
            <p className="text-gray-600">
              <span className="font-semibold">Experience:</span> Media Team Head at PES College, 
              Freelance Video Editor & Cinematographer, Independent Content Creation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 