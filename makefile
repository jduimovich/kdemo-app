
export TEKTON_DEMO_NS=tekton-pipelines
export TEKTON_DEMO_SA=tekton-dashboard
	
all: 
	pipeline-name-for-repo 
	bash commit-push-build
