import React from 'react';
import {
  CanvasPath,
  ReactSketchCanvas,
  ReactSketchCanvasProps,
  ReactSketchCanvasRef,
} from 'react-sketch-canvas';

type Handlers = [string, () => void, string][];

function EditTool() {
  const [canvasProps, setCanvasProps] = React.useState<
    Partial<ReactSketchCanvasProps>
  >({
    className: 'react-sketch-canvas',
    width: '100%',
    height: '500px',
    backgroundImage:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg',
    preserveBackgroundImageAspectRatio: 'none',
    strokeWidth: 4,
    eraserWidth: 5,
    strokeColor: '#000000',
    canvasColor: '#FFFFFF',
    style: { borderRight: '1px solid #CCC' },
    svgStyle: {},
    exportWithBackgroundImage: true,
    withTimestamp: true,
    allowOnlyPointerType: 'all',
  });

  const canvasRef = React.createRef<ReactSketchCanvasRef>();

  const [paths, setPaths] = React.useState<CanvasPath[]>([]);
  const [lastStroke, setLastStroke] = React.useState<{
    stroke: CanvasPath | null;
    isEraser: boolean | null;
  }>({ stroke: null, isEraser: null });

  const undoHandler = () => {
    const undo = canvasRef.current?.undo;

    if (undo) {
      undo();
    }
  };

  const redoHandler = () => {
    const redo = canvasRef.current?.redo;

    if (redo) {
      redo();
    }
  };

  const createButton = (
    label: string,
    handler: () => void,
    themeColor: string
  ) => (
    <button
      key={label}
      className={`btn btn-${themeColor} btn-block`}
      type="button"
      onClick={handler}
    >
      {label}
    </button>
  );

  const buttonsWithHandlers: Handlers = [
    ['Undo', undoHandler, 'primary'],
    ['Redo', redoHandler, 'primary'],
  ];

  const onChange = (updatedPaths: CanvasPath[]): void => {
    setPaths(updatedPaths);
  };

  return (
    <main className="container-fluid p-5">
      <div className="row">
        <section className="col-9">
          <section className="row no-gutters canvas-area m-0 p-0">
            <div className="col-9 canvas p-0">
              <ReactSketchCanvas
                ref={canvasRef}
                onChange={onChange}
                onStroke={(stroke, isEraser) =>
                  setLastStroke({ stroke, isEraser })
                }
                className="w-[60rem] h-[60rem] border-dashed border-8 opacity-20 rounden-3xl stroke-4 stroke-cyan-500 relative -top-full"
              />
            </div>
            <div className="col-3 panel">
              <div className="d-grid gap-2">
                {buttonsWithHandlers.map(([label, handler, themeColor]) =>
                  createButton(label, handler, themeColor)
                )}
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

export default EditTool;
