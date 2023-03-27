import LoaderStyles from './Loaders.module.css'

export function Loader() {
  return (
    <div className={LoaderStyles.wr}>
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
    </div>
  )
}
