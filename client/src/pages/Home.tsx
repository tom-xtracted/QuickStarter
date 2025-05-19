import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  FolderIcon, 
  FileCode, 
  FileText, 
  Code, 
  Play, 
  FlaskConical, 
  Package
} from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Your Empty App
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This is a minimal starter template ready to be pushed to GitHub. Build your application from this foundation.
        </p>
      </div>

      {/* App Structure Card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>App Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FolderIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">client/src/</h3>
                <p className="text-sm text-gray-500">Frontend application source files</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FolderIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">server/</h3>
                <p className="text-sm text-gray-500">Backend server code</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FolderIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">shared/</h3>
                <p className="text-sm text-gray-500">Shared code between frontend and backend</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FileCode className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">package.json</h3>
                <p className="text-sm text-gray-500">Dependencies and scripts configuration</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FileCode className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">.gitignore</h3>
                <p className="text-sm text-gray-500">Git ignore configuration</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FileText className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">README.md</h3>
                <p className="text-sm text-gray-500">Project documentation</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GitHub Push Instructions */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Push to GitHub</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 rounded-md p-4 font-mono text-sm">
            <p className="mb-3"># Initialize repository</p>
            <p className="text-gray-800 mb-3">git init</p>
            <Separator className="my-2" />
            
            <p className="mb-3"># Add all files</p>
            <p className="text-gray-800 mb-3">git add .</p>
            <Separator className="my-2" />
            
            <p className="mb-3"># Commit changes</p>
            <p className="text-gray-800 mb-3">git commit -m "Initial commit"</p>
            <Separator className="my-2" />
            
            <p className="mb-3"># Add remote repository</p>
            <p className="text-gray-800 mb-3">git remote add origin https://github.com/username/repo-name.git</p>
            <Separator className="my-2" />
            
            <p className="mb-3"># Push to GitHub</p>
            <p className="text-gray-800">git push -u origin main</p>
          </div>
        </CardContent>
      </Card>

      {/* Getting Started Card */}
      <Card>
        <CardHeader>
          <CardTitle>Development Commands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Install dependencies</h3>
                <code className="text-sm font-mono block text-gray-800 mt-1">npm install</code>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Play className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Start development server</h3>
                <code className="text-sm font-mono block text-gray-800 mt-1">npm run dev</code>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <FlaskConical className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Run tests</h3>
                <code className="text-sm font-mono block text-gray-800 mt-1">npm test</code>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <Package className="h-5 w-5 text-purple-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Build for production</h3>
                <code className="text-sm font-mono block text-gray-800 mt-1">npm run build</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
