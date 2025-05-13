import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { X, Video, ChevronLeft, ChevronRight, Heart, MessageSquare, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  likes: number;
  views: number;
  comments: number;
  coverImage: string;
  media: MediaItem[];
}

const dummyProjects: Project[] = [
  {
    id: "project1",
    title: "Luxury Automotive Photography",
    description: "A premium photo and video collection featuring luxury automobiles",
    date: "2023-12-01",
    category: "Photography",
    likes: 342,
    views: 5670,
    comments: 48,
    coverImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000",
    media: [
      {
        id: "media1",
        type: "image",
        url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000",
        title: "Sports Car",
        description: "Elegant sports car on a coastal road"
      },
      {
        id: "media2",
        type: "video",
        url: "https://player.vimeo.com/external/539043646.hd.mp4?s=eb9ac1411934cedaf26da3de6b02191779dda3c7&profile_id=175&oauth2_token_id=57447761",
        title: "Car Drive",
        description: "Luxury car driving through scenic mountain roads"
      },
      {
        id: "media3",
        type: "image",
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
        title: "Vintage Classic",
        description: "Classic vintage car showcasing timeless design"
      }
    ]
  },
  {
    id: "project2",
    title: "Gourmet Food Collection",
    description: "Stunning culinary photography highlighting gourmet dishes",
    date: "2023-11-15",
    category: "Food",
    likes: 278,
    views: 3890,
    comments: 32,
    coverImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000",
    media: [
      {
        id: "media4",
        type: "image",
        url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000",
        title: "Gourmet Salad",
        description: "Fresh vegetables arranged beautifully"
      },
      {
        id: "media5",
        type: "video",
        url: "https://player.vimeo.com/external/414980771.hd.mp4?s=9e8040cafb9c8a95968b3462c5f94c4d9748729d&profile_id=175&oauth2_token_id=57447761",
        title: "Coffee Pour",
        description: "Barista pouring latte art"
      },
      {
        id: "media6",
        type: "image",
        url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000",
        title: "Gourmet Plate",
        description: "Exquisite plating with fresh ingredients"
      }
    ]
  },
  {
    id: "project3",
    title: "Travel Destinations",
    description: "Breathtaking views from exotic locations around the world",
    date: "2024-01-10",
    category: "Travel",
    likes: 421,
    views: 6230,
    comments: 57,
    coverImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000",
    media: [
      {
        id: "media7",
        type: "image",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000",
        title: "Mountain View",
        description: "Panoramic view of mountains at sunset"
      },
      {
        id: "media8",
        type: "image",
        url: "https://images.unsplash.com/photo-1502085026254-26f808a96f60?q=80&w=1000",
        title: "Beach Sunset",
        description: "Golden sunset over calm waters"
      },
      {
        id: "media9",
        type: "video",
        url: "https://player.vimeo.com/external/330412624.hd.mp4?s=9a45976c12d248b001b2481d12b286c3ee251414&profile_id=175&oauth2_token_id=57447761",
        title: "Ocean Waves",
        description: "Relaxing waves on a tropical beach"
      }
    ]
  },
  {
    id: "project4",
    title: "Architecture & Real Estate",
    description: "Stunning architectural photography and virtual tours",
    date: "2024-02-15",
    category: "Architecture",
    likes: 187,
    views: 2950,
    comments: 29,
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
    media: [
      {
        id: "media10",
        type: "image",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
        title: "Modern Home",
        description: "Contemporary architectural masterpiece"
      },
      {
        id: "media11",
        type: "video",
        url: "https://player.vimeo.com/external/494950873.hd.mp4?s=72e59621c33fec6c0a97d1cb6bf27ec656d00a20&profile_id=175&oauth2_token_id=57447761",
        title: "Property Tour",
        description: "Virtual walkthrough of a luxury property"
      },
      {
        id: "media12",
        type: "image",
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000",
        title: "Interior Design",
        description: "Elegant interior design photography"
      }
    ]
  },
  {
    id: "project5",
    title: "Fashion Photography",
    description: "Creative fashion photography and commercial lookbooks",
    date: "2024-03-05",
    category: "Fashion",
    likes: 302,
    views: 4870,
    comments: 42,
    coverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    media: [
      {
        id: "media13",
        type: "image",
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
        title: "Fashion Model",
        description: "High fashion editorial photography"
      },
      {
        id: "media14",
        type: "video",
        url: "https://player.vimeo.com/external/567250548.hd.mp4?s=e88fa725ebd66300d7077ed95e6bcb40b69ccbbd&profile_id=175&oauth2_token_id=57447761",
        title: "Fashion Show",
        description: "Behind the scenes of a runway show"
      },
      {
        id: "media15",
        type: "image",
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000",
        title: "Street Style",
        description: "Urban fashion photography"
      }
    ]
  }
];

const Portfolio: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>(dummyProjects);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);
  const [layout, setLayout] = useState<'grid' | 'masonry'>('grid');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    
    // Delay observing project elements to ensure they're rendered
    setTimeout(() => {
      const projectElements = document.querySelectorAll('.project-item');
      projectElements.forEach(element => {
        observer.observe(element);
      });
    }, 100);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      document.querySelectorAll('.project-item').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, [projects]);

  const openProject = (project: Project, mediaIndex: number = 0) => {
    setSelectedProject(project);
    setSelectedMediaIndex(mediaIndex);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    
    const totalItems = selectedProject.media.length;
    if (direction === 'prev') {
      setSelectedMediaIndex((prev) => (prev - 1 + totalItems) % totalItems);
    } else {
      setSelectedMediaIndex((prev) => (prev + 1) % totalItems);
    }
  };

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0 transition-opacity duration-700 ease-in-out" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block mb-4 px-3 py-1 bg-[#ff4c00]/10 border border-[#ff4c00]/30 rounded-full">
            <p className="text-[#ff4c00] text-sm font-medium">Creative Portfolio</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Showcase of Our Work
          </h2>
          <p className="text-gray-700 text-lg">
            Browse through our latest projects across different categories
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff4c00]"></div>
          </div>
        ) : (
          <div className={cn(
            "gap-6",
            layout === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "columns-1 md:columns-2 lg:columns-3 space-y-6"
          )}>
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={cn(
                  "project-item group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-10",
                  layout === 'masonry' ? "break-inside-avoid mb-6" : ""
                )}
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] bg-gray-100">
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button 
                      variant="outline" 
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 w-full"
                    >
                      View Project
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm py-1 px-2 rounded-full text-xs text-white">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#ff4c00] transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between text-gray-500 text-sm">
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    <span>{project.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <Dialog open={!!selectedProject} onOpenChange={() => selectedProject && closeProject()}>
          <DialogContent className="max-w-6xl w-full bg-white p-0 border-none">
            <DialogClose className="absolute right-4 top-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/80">
              <X className="h-6 w-6 text-white" />
            </DialogClose>
            
            {selectedProject && (
              <div className="flex flex-col">
                <div className="relative bg-black aspect-video w-full overflow-hidden">
                  {selectedProject.media[selectedMediaIndex].type === "image" ? (
                    <img
                      src={selectedProject.media[selectedMediaIndex].url}
                      alt={selectedProject.media[selectedMediaIndex].title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video
                      src={selectedProject.media[selectedMediaIndex].url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    ></video>
                  )}
                  
                  {/* Navigation controls */}
                  <Button 
                    variant="outline" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/80 rounded-full p-2 h-auto"
                    onClick={(e) => { e.stopPropagation(); navigateMedia('prev'); }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/20 text-white hover:bg-black/80 rounded-full p-2 h-auto"
                    onClick={(e) => { e.stopPropagation(); navigateMedia('next'); }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-black mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-700">{selectedProject.media[selectedMediaIndex].description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <Heart className="h-5 w-5 mr-1 text-[#ff4c00]" />
                        <span>{selectedProject.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-5 w-5 mr-1 text-gray-500" />
                        <span>{selectedProject.views}</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 mr-1 text-gray-500" />
                        <span>{selectedProject.comments}</span>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{selectedProject.date}</span>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-6 gap-2">
                    {selectedProject.media.map((media, index) => (
                      <div 
                        key={media.id}
                        className={cn(
                          "aspect-square rounded-md overflow-hidden cursor-pointer",
                          selectedMediaIndex === index ? "ring-2 ring-[#ff4c00]" : "opacity-70 hover:opacity-100"
                        )}
                        onClick={(e) => { e.stopPropagation(); setSelectedMediaIndex(index); }}
                      >
                        {media.type === "image" ? (
                          <img 
                            src={media.url} 
                            alt={media.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="relative w-full h-full bg-gray-900">
                            <video 
                              src={media.url}
                              className="w-full h-full object-cover"
                            ></video>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Video className="h-6 w-6 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
