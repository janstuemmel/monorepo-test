module.exports = {
  onPreBuild: () => {
    const currentProject = 'app-1';
    const projectHasChanged = false;
    if (!projectHasChanged) {
      utils.build.cancelBuild(
        `Build was cancelled because ${currentProject} was not affected by the latest changes`
      );
    }
  },
};
