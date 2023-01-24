import LoaderStyles from './Loader.Module.css'

export function Loader() {
  return (
    <div className={LoaderStyles['lds-spinner']}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
