
export TEKTON_DEMO_NS=tekton-pipelines
export TEKTON_DEMO_SA=tekton-dashboard
	
all: 
	which pipeline-name-for-repo 
	bash commit-push-build
